import "./edit.css";
// import { Form } from "react-bootstrap";


export default function Edit() {
    return (
        <div className="edit">
            <img 
                src="https://images.pexels.com/photos/3570483/pexels-photo-3570483.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                alt="" 
                className="editImg"
            />
            <form className="editForm">
                <div className="editFormGroup">
                    <label htmlFor="fileInput">
                        <i class="far fa-file-image editIcon"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}} />
                    <input type="text" placeholder="Title..." className="editInput" autoFocus={true}/>
                </div>
                <div className="editFormGroup">
                    <textarea 
                        placeholder="Tell your story..." 
                        type="text" 
                        className="editText">
                    </textarea>
                </div>
                <button className="editSubmit">Publish</button>
            </form>
        </div>
    )
}

