import {MigrationInterface, QueryRunner} from "typeorm";

export class aaaaaaaa1639600125866 implements MigrationInterface {
    name = 'aaaaaaaa1639600125866'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tags\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`details\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`courses\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`courses_tags_tags\` (\`coursesId\` int NOT NULL, \`tagsId\` int NOT NULL, INDEX \`IDX_d8199628c7f99576bdc8737f7a\` (\`coursesId\`), INDEX \`IDX_3a8605a1a1aef4816d6ef49fc5\` (\`tagsId\`), PRIMARY KEY (\`coursesId\`, \`tagsId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`courses_tags_tags\` ADD CONSTRAINT \`FK_d8199628c7f99576bdc8737f7ae\` FOREIGN KEY (\`coursesId\`) REFERENCES \`courses\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`courses_tags_tags\` ADD CONSTRAINT \`FK_3a8605a1a1aef4816d6ef49fc57\` FOREIGN KEY (\`tagsId\`) REFERENCES \`tags\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`courses_tags_tags\` DROP FOREIGN KEY \`FK_3a8605a1a1aef4816d6ef49fc57\``);
        await queryRunner.query(`ALTER TABLE \`courses_tags_tags\` DROP FOREIGN KEY \`FK_d8199628c7f99576bdc8737f7ae\``);
        await queryRunner.query(`DROP INDEX \`IDX_3a8605a1a1aef4816d6ef49fc5\` ON \`courses_tags_tags\``);
        await queryRunner.query(`DROP INDEX \`IDX_d8199628c7f99576bdc8737f7a\` ON \`courses_tags_tags\``);
        await queryRunner.query(`DROP TABLE \`courses_tags_tags\``);
        await queryRunner.query(`DROP TABLE \`courses\``);
        await queryRunner.query(`DROP TABLE \`tags\``);
    }

}
