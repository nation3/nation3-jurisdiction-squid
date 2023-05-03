import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {PositionStatus} from "./_positionStatus"
import {AgremeentInfo} from "./agremeentInfo.model"

@Entity_()
export class AgreementPosition {
    constructor(props?: Partial<AgreementPosition>) {
        Object.assign(this, props)
    }

    /**
     * Position ID
     */
    @PrimaryColumn_()
    id!: string

    /**
     * Holder of the position - address
     */
    @Column_("bytea", {nullable: false})
    party!: Uint8Array

    /**
     * Amount of tokens corresponding to this position
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    balance!: bigint

    /**
     * Status of the agreement position
     */
    @Column_("varchar", {length: 9, nullable: false})
    status!: PositionStatus

    /**
     * Positions of the agreement
     */
    @OneToMany_(() => AgremeentInfo, e => e.agreementPosition)
    positions!: AgremeentInfo[]
}
