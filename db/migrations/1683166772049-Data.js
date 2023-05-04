module.exports = class Data1683166772049 {
    name = 'Data1683166772049'

    async up(db) {
        await db.query(`CREATE TABLE "agreement" ("id" character varying NOT NULL, "terms_hash" bytea NOT NULL, "criteria" numeric NOT NULL, "metadata_uri" text NOT NULL, "token" bytea NOT NULL, "status" character varying(9) NOT NULL, "created_at" numeric NOT NULL, CONSTRAINT "PK_e7537188219eeef56233a609753" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "agreement_position" ("id" character varying NOT NULL, "party" bytea NOT NULL, "balance" numeric NOT NULL, "status" character varying(9) NOT NULL, CONSTRAINT "PK_68691a32476ff64af2b259153c1" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "settlement" ("id" character varying NOT NULL, "submitted_at" numeric NOT NULL, "status" character varying(9) NOT NULL, "dispute_id" character varying, CONSTRAINT "PK_23997ae6972574beb45af0177ad" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_f96e8494bccf73f29a3e4c79f7" ON "settlement" ("dispute_id") `)
        await db.query(`CREATE TABLE "dispute" ("id" character varying NOT NULL, "created_at" numeric NOT NULL, "resolution" bytea, "agreement_id" character varying, "settlement_id" character varying, CONSTRAINT "PK_e2f1f4741f2094ce789b0a7c5b3" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_e0d6bc3f5ca0c9e5a604e18577" ON "dispute" ("agreement_id") `)
        await db.query(`CREATE INDEX "IDX_a2ddf6257a352bc49c5612b599" ON "dispute" ("settlement_id") `)
        await db.query(`CREATE TABLE "agremeent_info" ("id" character varying NOT NULL, "agreement_id" character varying, "agreement_position_id" character varying, "dispute_id" character varying, CONSTRAINT "PK_e07f8207a0ef6d112bae725de71" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_17db6a61a4b2e0e1844272ac80" ON "agremeent_info" ("agreement_id") `)
        await db.query(`CREATE INDEX "IDX_980cfcec7435c95f6c0864a227" ON "agremeent_info" ("agreement_position_id") `)
        await db.query(`CREATE INDEX "IDX_e6bac968e94ab5636174af161b" ON "agremeent_info" ("dispute_id") `)
        await db.query(`ALTER TABLE "settlement" ADD CONSTRAINT "FK_f96e8494bccf73f29a3e4c79f7d" FOREIGN KEY ("dispute_id") REFERENCES "dispute"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "dispute" ADD CONSTRAINT "FK_e0d6bc3f5ca0c9e5a604e185774" FOREIGN KEY ("agreement_id") REFERENCES "agreement"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "dispute" ADD CONSTRAINT "FK_a2ddf6257a352bc49c5612b5994" FOREIGN KEY ("settlement_id") REFERENCES "settlement"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "agremeent_info" ADD CONSTRAINT "FK_17db6a61a4b2e0e1844272ac803" FOREIGN KEY ("agreement_id") REFERENCES "agreement"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "agremeent_info" ADD CONSTRAINT "FK_980cfcec7435c95f6c0864a2270" FOREIGN KEY ("agreement_position_id") REFERENCES "agreement_position"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "agremeent_info" ADD CONSTRAINT "FK_e6bac968e94ab5636174af161bd" FOREIGN KEY ("dispute_id") REFERENCES "dispute"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "agreement"`)
        await db.query(`DROP TABLE "agreement_position"`)
        await db.query(`DROP TABLE "settlement"`)
        await db.query(`DROP INDEX "public"."IDX_f96e8494bccf73f29a3e4c79f7"`)
        await db.query(`DROP TABLE "dispute"`)
        await db.query(`DROP INDEX "public"."IDX_e0d6bc3f5ca0c9e5a604e18577"`)
        await db.query(`DROP INDEX "public"."IDX_a2ddf6257a352bc49c5612b599"`)
        await db.query(`DROP TABLE "agremeent_info"`)
        await db.query(`DROP INDEX "public"."IDX_17db6a61a4b2e0e1844272ac80"`)
        await db.query(`DROP INDEX "public"."IDX_980cfcec7435c95f6c0864a227"`)
        await db.query(`DROP INDEX "public"."IDX_e6bac968e94ab5636174af161b"`)
        await db.query(`ALTER TABLE "settlement" DROP CONSTRAINT "FK_f96e8494bccf73f29a3e4c79f7d"`)
        await db.query(`ALTER TABLE "dispute" DROP CONSTRAINT "FK_e0d6bc3f5ca0c9e5a604e185774"`)
        await db.query(`ALTER TABLE "dispute" DROP CONSTRAINT "FK_a2ddf6257a352bc49c5612b5994"`)
        await db.query(`ALTER TABLE "agremeent_info" DROP CONSTRAINT "FK_17db6a61a4b2e0e1844272ac803"`)
        await db.query(`ALTER TABLE "agremeent_info" DROP CONSTRAINT "FK_980cfcec7435c95f6c0864a2270"`)
        await db.query(`ALTER TABLE "agremeent_info" DROP CONSTRAINT "FK_e6bac968e94ab5636174af161bd"`)
    }
}
