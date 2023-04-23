import TrollFace from '../../public/images/troll-face.svg?component'
export default function Header(){
    return (
        <header className="header">
            <TrollFace className='header--icon'/>
            <h3 className='header--title'>Meme Generator</h3>
            <h4 className='header--description'>React Course - Project 3</h4>
        </header>
    )
}