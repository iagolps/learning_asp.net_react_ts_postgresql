CREATE TABLE dockerschm.dockerdb
(
 departmentid serial PRIMARY KEY,
 departmentname VARCHAR (100) NOT NULL
);

ALTER TABLE "dockerschm.dockerdb" OWNER TO dockeruser;
Insert into dockerdb(departmentid, departmentname) values( '1', 'Description 1');
Insert into dockerdb(departmentid, departmentname) values( '2', 'Description 2');
Insert into dockerdb(departmentid, departmentname) values( '3', 'Description 3');
Insert into dockerdb(departmentid, departmentname) values( '4', 'Description 4');