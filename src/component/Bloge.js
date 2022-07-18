import { useEffect, useState } from "react"
 
  
const   Bloge = () => {
    const [Post, setpost ]= useState([])
    useEffect(() => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };
    fetch('https://www.wp-course.site/wp-json/youthink/posts', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
 
                    
            
    
    }, []);
    return (
         <>
        <div className="header"> <h3> our Latest Post</h3></div>
     
                              
        <div className="row">
                <div className="col">
                    {Post.map((Post, i) => {
                        return  (  {Post}  )
                    })}
                                </div>
               </div>
    
                  
    
       
     
    
    </>
 )
}
 
export default Bloge