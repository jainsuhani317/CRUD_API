import express from 'express';
import { v4 as uuidv4 } from 'uuid';

var users = []
export const getUsers= (req, res) => {
    console.log(users);
    res.send(users);
}
export const createUse =(req, res) => {

    const user = req.body;
    const userid = uuidv4();
    const userwithID = { ...user, id: userid };
    console.log(userwithID);
    users.push(userwithID);
    res.send(`user with name ${user.name} added to the database`)
}
export const getUser=(req, res) => {
    // res.send('Get id parameter');
    // console.log('test');
    const { id } = req.params;
    //console.log(id);
    const founduser = users.find((user) => user.id === id);
    //console.log(founduser);
    res.send(founduser);

}
export const deleteUser =(req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id != id);
    res.send(`user with the id ${id} deleted from database`);
}
export const updateUser=(req, res) => {
    const { id } = req.params;
    const { name, age, gender } = req.body
    const update_user = users.find((user) => user.id == id);

    if(name)
    {
        update_user.name=name;
    }
    if(age)
    {
        update_user.age=age;
    }
    if(gender)
    {
        update_user.gender=gender;
    }
    res.send('user updated');

}
