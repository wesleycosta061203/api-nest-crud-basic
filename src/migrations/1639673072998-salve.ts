import {MigrationInterface, QueryRunner} from "typeorm";

export class salve1639673072998 implements MigrationInterface {
    name = 'salve1639673072998'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tags\` CHANGE \`created_at\` \`details\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`CREATE TABLE \`courses_tags_tags\` (\`coursesId\` int NOT NULL, \`tagsId\` int NOT NULL, INDEX \`IDX_d8199628c7f99576bdc8737f7a\` (\`coursesId\`), INDEX \`IDX_3a8605a1a1aef4816d6ef49fc5\` (\`tagsId\`), PRIMARY KEY (\`coursesId\`, \`tagsId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`courses\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`tags\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`tags\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`tags\` ADD \`id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`tags\` DROP COLUMN \`details\``);
        await queryRunner.query(`ALTER TABLE \`tags\` ADD \`details\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`courses\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`courses\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`courses\` ADD \`id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`courses_tags_tags\` ADD CONSTRAINT \`FK_d8199628c7f99576bdc8737f7ae\` FOREIGN KEY (\`coursesId\`) REFERENCES \`courses\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`courses_tags_tags\` ADD CONSTRAINT \`FK_3a8605a1a1aef4816d6ef49fc57\` FOREIGN KEY (\`tagsId\`) REFERENCES \`tags\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`courses_tags_tags\` DROP FOREIGN KEY \`FK_3a8605a1a1aef4816d6ef49fc57\``);
        await queryRunner.query(`ALTER TABLE \`courses_tags_tags\` DROP FOREIGN KEY \`FK_d8199628c7f99576bdc8737f7ae\``);
        await queryRunner.query(`ALTER TABLE \`courses\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`courses\` ADD \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`courses\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`tags\` DROP COLUMN \`details\``);
        await queryRunner.query(`ALTER TABLE \`tags\` ADD \`details\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`tags\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`tags\` ADD \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tags\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`courses\` ADD \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`DROP INDEX \`IDX_3a8605a1a1aef4816d6ef49fc5\` ON \`courses_tags_tags\``);
        await queryRunner.query(`DROP INDEX \`IDX_d8199628c7f99576bdc8737f7a\` ON \`courses_tags_tags\``);
        await queryRunner.query(`DROP TABLE \`courses_tags_tags\``);
        await queryRunner.query(`ALTER TABLE \`tags\` CHANGE \`details\` \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    }

}
