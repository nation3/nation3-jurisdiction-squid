import { TypeormDatabase } from '@subsquid/typeorm-store';
import {EvmBatchProcessor} from '@subsquid/evm-processor'
import { lookupArchive } from '@subsquid/archive-registry'
import assert from 'assert';
import { PositionStatus, AgreementStatus, Dispute, Settlement, AgremeentInfo, AgreementPosition, Agreement, ResolutionStatus } from './model';

const processor = new EvmBatchProcessor()
  .setDataSource({
    // uncomment and set RPC_ENDPOONT to enable contract state queries. 
    // Both https and wss endpoints are supported. 
    // chain: process.env.RPC_ENDPOINT,

    // Change the Archive endpoints for run the squid 
    // against the other EVM networks
    // For a full list of supported networks and config options
    // see https://docs.subsquid.io/develop-a-squid/evm-processor/configuration/

    archive: lookupArchive('eth-mainnet'),
  })
  .addTransaction([
    '0x0000000000000000000000000000000000000000'
  ], {
    range: {
      from: 6_000_000
    },
    data: {
      transaction: {
        from: true,
        value: true,
        hash: true
      }
    }
  });

function formatID(height:any, hash:string) {
  return `${String(height).padStart(10, '0')}-${hash}` 
} 

processor.run(new TypeormDatabase(), async (ctx) => {
  const agreements: Agreement[] = []
  for (let c of ctx.blocks) {
    for (let i of c.items) {
      assert(i.kind == 'transaction')
      // decode and normalize the tx data
      agreements.push(new Agreement({
        id: formatID(c.header.height, i.transaction.hash)
      }))
    }
   }

   // upsert batches of entities with batch-optimized ctx.store.save
   await ctx.store.save(agreements)
});

