import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateEmployeeTable1761368895904 implements MigrationInterface {
    name = 'CreateEmployeeTable1761368895904'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`employee\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`dob\` date NOT NULL, \`address\` varchar(255) NOT NULL, \`pan\` varchar(255) NOT NULL, \`mobile\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_5d4700d1891588bc8598a43467\` (\`pan\`), UNIQUE INDEX \`IDX_980edbf1b48a687fdded86853d\` (\`mobile\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_980edbf1b48a687fdded86853d\` ON \`employee\``);
        await queryRunner.query(`DROP INDEX \`IDX_5d4700d1891588bc8598a43467\` ON \`employee\``);
        await queryRunner.query(`DROP TABLE \`employee\``);
    }

}
