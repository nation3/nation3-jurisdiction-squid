import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {AgremeentInfo} from "./agremeentInfo.model"
import {AgreementStatus} from "./_agreementStatus"

@Entity_()
export class Agreement {
    constructor(props?: Partial<Agreement>) {
        Object.assign(this, props)
    }

    /**
     * Agreement ID
     */
    @PrimaryColumn_()
    id!: string

    /**
     * Hash of the detailed terms of the agreement
     */
    @Column_("bytea", {nullable: false})
    termsHash!: Uint8Array

    /**
     * Required amount to join or merkle root of (address,amount)
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    criteria!: bigint

    /**
     * Agreement table join
     */
    @OneToMany_(() => AgremeentInfo, e => e.agreement)
    agreements!: AgremeentInfo[]

    /**
     * Agreement Metadata URI
     */
    @Column_("text", {nullable: false})
    metadataURI!: string

    /**
     * Agreement token address
     */
    @Column_("bytea", {nullable: false})
    token!: Uint8Array

    /**
     * Status of the agreement
     */
    @Column_("varchar", {length: 9, nullable: false})
    status!: AgreementStatus

    /**
     * Time of the agreement creation
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    createdAt!: bigint
}
