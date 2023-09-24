import { client } from '../db/connect.js'; 
import { ObjectId } from 'mongodb';
import express from 'express';

const getAll = async (req, res) => {
    await client.connect()
    const result = await client.db('Contacts').collection('Contacts').find();
    const lists = await result.toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
};

const getSingle = async (req, res, id) => {
    const userId = new ObjectId(id);
    const result = await client.db('Contacts').collection('Contacts').find({ _id: userId });
    const lists = await result.toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
};

export { getAll, getSingle };

export const contact = async (req, res) => {
    let id = req.query.id;
    if(id){
        await client.connect();
        return await getSingle(req,res, id);

    }else{
        await client.connect();
        return await getAll(req,res);
    }

};
