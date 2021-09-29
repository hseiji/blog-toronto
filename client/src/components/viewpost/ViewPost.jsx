import "./viewpost.css";

export default function ViewPost() {
    return (
        <div className="viewpost">
            <div className="viewPostWrapper">
                <img 
                    src="https://images.pexels.com/photos/2665834/pexels-photo-2665834.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                    alt="" 
                    className="viewPostImg"
                />
                <h1 className="viewPostTitle">
                    Lorem ipsum dolor
                    <div className="viewPostEdit">
                        <i className="viewPostIcon far fa-edit"></i>
                        <i class="viewPostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="viewPostInfo">
                    <span className="viewPostAuthor">
                        Author: <b>Taka</b>
                    </span>
                    <span className="viewPostDate">Date</span>
                </div>
                <p className="viewPostDesc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sed commodi debitis ea cum, ducimus, corrupti, a iure nihil non eius odit itaque minus maxime vero praesentium laborum velit? Hic.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sed commodi debitis ea cum, ducimus, corrupti, a iure nihil non eius odit itaque minus maxime vero praesentium laborum velit? Hic.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sed commodi debitis ea cum, ducimus, corrupti, a iure nihil non eius odit itaque minus maxime vero praesentium laborum velit? Hic.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sed commodi debitis ea cum, ducimus, corrupti, a iure nihil non eius odit itaque minus maxime vero praesentium laborum velit? Hic.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sed commodi debitis ea cum, ducimus, corrupti, a iure nihil non eius odit itaque minus maxime vero praesentium laborum velit? Hic.
                </p>
            </div>
        </div>
    )
}
