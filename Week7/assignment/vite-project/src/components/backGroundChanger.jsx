import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import React,{useState} from 'react'
const colors = [
  {
    name: 'Red',
    value: '#771d1d',
  },
  {
    name: 'Green',
    value: '#2b771d',
  },
  {
    name: 'Blue',
    value: '#1d2477',
  },
  {
    name: 'Violet',
    value: '#4c1d77',
  },
  {
    name: 'Black',
    value: '#292929',
  },
  {
    name: 'Yellow',
    value: '#76771d',
  },
]
export default function BackgroundChanger()
{
    const [color,setColor] = useState("blue");
    return <div>
    <div style = {{ backgroundColor: color, margin : '10px'
     ,padding: '20px', color: 'white' }}>
      Background
    </div>
        <ButtonGroup color="secondary" aria-label="Medium-sized button group">
      {colors.map((c)=>{
        return <Button 
        style = {{backgroundColor : c.value , color : "white"}}
        onClick= {()=>{
          setColor(c.value);
        }}
        >
          {c.name}
        </Button>
      })}
    </ButtonGroup>
    </div>
}