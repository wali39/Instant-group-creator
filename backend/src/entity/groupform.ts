import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity("GroupForm")
export class GroupForm {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column("int")
  batch!: number;

  @Column("simple-array")
  skip!: number[];
  @Column('simple-array')
  explicitRoll!:number[]
}
