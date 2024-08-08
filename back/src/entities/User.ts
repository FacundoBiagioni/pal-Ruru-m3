import { JoinColumn, OneToOne, Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Credential } from "./Credential";
import { Appointment } from "./Appointment";

@Entity({ name: "users"})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, type: "varchar", length: 200})
    email: string;

    @Column({ type: "date", default: new Date() })
    birthdate: Date;

    @Column({unique: true, type: "int" })
    dni_number: number;

    @OneToOne(() => Credential)
    @JoinColumn({name: "credentialsId"})
    credentials: Credential;

    @OneToMany(() => Appointment, appointment => appointment.user)
    @JoinColumn({name: "appointmentsId"})
    appointments: Appointment[];
    
}