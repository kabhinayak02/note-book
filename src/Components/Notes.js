import React, { useContext } from 'react'
import AddNote from './AddNote';
import NoteItem from './NoteItem';
import noteContext from '../Context/notes/NoteContext';

const Notes = () => {
    const context = useContext(noteContext);
    const {notes, addNote} = context;
    return (
        <>
        <AddNote/>
        <div className="row my-3">
            <h2>You Notes</h2> 
            {notes.map((note)=>{
                return <NoteItem key={note._id} note={note}/>  
            })}
            </div>
            </>
    )
}

export default Notes