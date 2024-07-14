import { useEffect, useState } from "react";
import EmojiData from '../emoji.json';

function EmojiContent() {

  const [emoji, setEmoiji] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const eData= EmojiData.emoji.filter(
      item=>
        item.name.toLowerCase().includes(emoji.toLowerCase())
    ) 
    setData(eData);
  },[emoji])

  return (
    <div>
      <h1>😀Emoji Search🤪</h1>
      <input type="text" placeholder="Enter your text here... !"
        value={emoji}
        onChange={(e) => setEmoiji(e.target.value)}
      />
      <ul>
        {
          data.length > 0 
          ? data.map((item)=>
                  <li>
                    {item.emoji}
                    {item.name} 
                    <hr/>
                  </li> 
                )
          : <li>"........Data Not found........"</li>
        }
      </ul>

    </div>
  )
}

export default EmojiContent;