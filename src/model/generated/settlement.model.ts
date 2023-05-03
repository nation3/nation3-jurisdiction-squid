import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Dispute} from "./dispute.model"
import {ResolutionStatus} from "./_resolutionStatus"

@Entity_()
export class Settlement {
    constructor(props?: Partial<Settlement>) {
        Object.assign(this, props)
    }

    /**
     * Settlement ID
     */
    @PrimaryColumn_()
    id!: string

    /**
     * Disputed ID
     */
    @Index_()
    @ManyToOne_(() => Dispute, {nullable: true})
    dispute!: Dispute

    /**
     * Time of the submission
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    submittedAt!: bigint

    /**
     * Resolution Status
     */
    @Column_("varchar", {length: 9, nullable: false})
    status!: ResolutionStatus
}
