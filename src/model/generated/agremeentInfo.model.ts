import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Agreement} from "./agreement.model"
import {AgreementPosition} from "./agreementPosition.model"
import {Dispute} from "./dispute.model"

@Entity_()
export class AgremeentInfo {
    constructor(props?: Partial<AgremeentInfo>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Agreement, {nullable: true})
    agreement!: Agreement

    @Index_()
    @ManyToOne_(() => AgreementPosition, {nullable: true})
    agreementPosition!: AgreementPosition

    @Index_()
    @ManyToOne_(() => Dispute, {nullable: true})
    dispute!: Dispute | undefined | null
}
