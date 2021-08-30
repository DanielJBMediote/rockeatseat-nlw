import { Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn, Column } from "typeorm";
import { v4 as uuid } from 'uuid';


@Entity()
class Users {

  @PrimaryColumn()
  readonly id: String;

  @Column()
  name: String;

  @Column()
  email: String;

  @Column()
  admin: Boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;


  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Users }