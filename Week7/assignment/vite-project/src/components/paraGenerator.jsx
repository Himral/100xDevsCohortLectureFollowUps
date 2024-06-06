import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import React, {useState} from 'react'
export default function ParaGenerator(){
    const [noOfWords,setNoOfWords] = useState(0);
    const [para,setPara] = useState("Hello this is the base Paragraph")
    const literallyPara = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    const wordsArray = literallyPara.split(' ');
    const handleChange = (event) =>{
        setNoOfWords(event.target.value);
    }
    const generatePara = () =>{
      let newPara = "";
      for(let i = 0;i < noOfWords; i++)
        {
          newPara += (wordsArray[i % wordsArray.length] + " ")
        }
      setPara(newPara)
    }
    console.log(noOfWords)
    return <div>
        <h1>Para Generator</h1>
        <h3>Create a paragraph generator which takes length of words in paragraph and generate paragraph.</h3>
        <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <input 
      type = "text" 
      name = "no_of_words"
      value = {noOfWords}
      onChange = {handleChange}
      />
      <Button onClick = {generatePara} style = {{margin : "10px"}} variant="outlined">Submit</Button>
      <p>{para}</p>
    </Box>
    </div>
}