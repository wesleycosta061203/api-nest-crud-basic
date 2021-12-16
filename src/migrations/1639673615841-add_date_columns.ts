import {MigrationInterface, QueryRunner} from "typeorm";

export class addDateColumns1639673615841 implements MigrationInterface {
    name = 'addDateColumns1639673615841'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`courses\` ADD \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`courses\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`courses\` ADD \`deleted_at\` datetime(6) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`courses\` DROP COLUMN \`deleted_at\``);
        await queryRunner.query(`ALTER TABLE \`courses\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`courses\` DROP COLUMN \`created_at\``);
    }

}
