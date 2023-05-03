import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Agreement} from "./agreement.model"
import {Settlement} from "./settlement.model"
import {AgremeentInfo} from "./agremeentInfo.model"

@Entity_()
export class Dispute {
    constructor(props?: Partial<Dispute>) {
        Object.assign(this, props)
    }

    /**
     * Dispute id
     */
    @PrimaryColumn_()
    id!: string

    /**
     * Agreement in dispute
     */
    @Index_()
    @ManyToOne_(() => Agreement, {nullable: true})
    agreement!: Agreement | undefined | null

    /**
     * Time of the dispute creation
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    createdAt!: bigint

    /**
     * Resolution Id
     */
    @Column_("bytea", {nullable: true})
    resolution!: Uint8Array | undefined | null

    /**
     * Last submitted settlement
     */
    @Index_()
    @ManyToOne_(() => Settlement, {nullable: true})
    settlement!: Settlement | undefined | null

    /**
     * All settlements linked to a dispute
     */
    @OneToMany_(() => Settlement, e => e.dispute)
    settlements!: Settlement[]

    /**
     * All disputes linked to an agreement
     */
    @OneToMany_(() => AgremeentInfo, e => e.dispute)
    disputes!: AgremeentInfo[]
}
