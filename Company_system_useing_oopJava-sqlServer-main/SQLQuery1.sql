create database company ;
use company ;
create table employee 
(
SSN int primary key not null ,
E_name nvarchar (max) not null ,
E_salary int null ,
E_gender varchar (20) not null ,
E_birth_date date  null ,
sup_ssn int not null foreign key 
references employee (SSN),
)


create table departments
(
Dep_number varchar(20) primary key not null ,
Dep_name  nvarchar (50) not null ,
Dep_location nvarchar (50) null ,


)
 Alter table employee 
 add dep_number varchar(20) not null  foreign key
 references departments (Dep_number);

create table projects 
(
P_number varchar (20) primary key ,
P_name nvarchar (50) unique not null ,
P_location nvarchar (50) null , 
Department_number varchar(20) not null foreign key
references departments (Dep_number)
)

create table depenendents
(
first_name nvarchar (20) not null ,
birth_date date null ,
start varchar(20) not null ,
employee_ssn int not null foreign key 
references employee (ssn)
)