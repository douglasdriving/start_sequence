import { useState } from 'react';

interface IProps {
  handleClick: () => void;
}

const Mantra = ({ handleClick }: IProps) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [mantra, setMantra] = useState<string>(localStorage.getItem('mantra') || "Your Mantra");

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => { setMantra(e.target.value) }
  const saveMantra = () => {
    localStorage.setItem('mantra', mantra);
    setEditMode(false);
  }

  // This function converts '\n' characters into '<br/>'.
  const convertNewlinesToBreaks = (text: string) => {
    return { __html: text.replace(/\n/g, '<br/>') };
  }

  return (
    <div className="mantra">
      <h1>Mantra</h1>
      {!editMode && <p dangerouslySetInnerHTML={convertNewlinesToBreaks(mantra)}></p>}
      {editMode && <textarea value={mantra} onInput={handleInput}></textarea>}
      {!editMode && <button onClick={handleClick}>Next</button>}
      {!editMode && <button onClick={() => setEditMode(true)}>Edit Mantra</button>}
      {editMode && <button onClick={saveMantra}>Save</button>}
    </div>
  );
}

export default Mantra;

//OLD MANTRA TEXT
/* <h1>Mantra</h1>
<p>Nu är det <b>SAMARBETETS HÖST™️</b></p>
<p>
  Det innebär att jag, främst av allt, är en <b>lagspelare</b> som prioriterar att arbeta och <b>skapa tillsammans</b> med andra, i alla kontexter av mitt liv. 💼🤲🚀😉
</p >

<h2>Om mig och arbete</h2>
<ol>
  <li>Jag arbetar <b>långsiktigt, tålmodigt</b> och bygger något riktigt häftigt under <b>flera års tid</b></li>
  <li>Jag arbetar <b>hållbart</b> och sätter <b>sömn, socialt,</b> och <b>konditionsträning</b> först</li>
  <li>Jag är <b>modig</b> och <b>vågar testa</b></li>
  <li>Jag <b>skapar</b> saker jag tycker är <b>spännande</b></li>
  <li>Jag är <b>stolt</b> över mina framsteg</li>
  <li>Jag ser på livets utmaningar som möjligheter att växa</li>
  <li>Jag gör alltid mitt bästa!</li>
</ol>

<h2>Kom ihåg att...</h2>

<ul>
  <li>Jag är också den som styr i mitt sociala liv och bokar in meningsfulla, kulturella aktiviteter med dem människor jag tycker om 👪🏛️🎭🕺</li>
  <li>Jag är också en <b>fattig konstnär</b> som lever <b>sparsamt</b> för att kunna leva i <b>frihet</b> och jobba med det jag <b>brinner</b> för 💵</li>
  <li>Fokusera intensivt under arbetstid, men slappna av på fritid</li>
  <li>avsluta varje dag med en dusch + läsning</li>
  <li>promenera varje morgon</li>
  <li>läs en bok till frukost</li>
  <li>Ha en balanserad alkoholkonsumtion</li>
</ul> */