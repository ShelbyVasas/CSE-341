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

const makeNew = async (req, res) => {
    await client.connect()

    const result = await client.db('Contacts').collection('Contacts').insertOne(req.body)
    if (result.acknowledged) {
        res.status(201).json(result);
      } else {
        res.status(500).json(result.error || 'Some error occurred while creating the contact.');
      }
};

const updateSingle = async (req, res) => {
    await client.connect()
    const contactId = new ObjectId(req.query.id);     

    const result = await client.db('Contacts').collection('Contacts').replaceOne({_id: contactId}, req.body)

    if (result.acknowledged) {
        res.status(204).send();
      } else {
        res.status(500).json(result.error || 'Some error occurred while updating the contact.');
      }
};

const deleteSingle = async (req, res) => {
    await client.connect()
    const contactId = new ObjectId(req.query.id);
    
    const result = await client.db('Contacts').collection('Contacts').deleteOne({_id: contactId});
    if (result.deletedCount > 0) {
        res.status(200).send();
      } else {
        res.status(500).json(result.error || 'Some error occurred while deleting the contact.');
      }
}
  
export { getAll, getSingle, makeNew, updateSingle, deleteSingle };

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

