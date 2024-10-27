import React from 'react'

function Issue() {
  return (
    <div className='problem'>
        
     <form action="https://formsubmit.co/hottakezpodcast@yahoo.com" method='POST'>
    <input type="text" id='firstname' name='firstname' placeholder='Name' ></input>
   
     <br /><br />
    <input type="text" id='email' name='email' placeholder='Email' ></input>
   <br/><br />
  
  <textarea className='message' id='message' placeholder='Write a message' cols='30' rows='10'></textarea><br />

<label htmlFor='issue'>Issue:</label>
<br />
<select name='issue-type' id='issue-type'>
<option value='videos'>Videos</option>
<option value='email'>Email</option>
<option value='links'>Broken links</option>
<option value='error'>Page not loading</option>

</select>
<br /><br />

   <button type='submit'>Send</button>   
</form>
    </div>
  )
}

export default Issue