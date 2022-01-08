import { Link } from 'react-router-dom'

const Footer = () => {
return (
<footer>
<p>Copyright &copy; 2021</p> 
<p>Za vise detalja o nama posetite link</p>
<Link to="/onama">O nama</Link>
<p>A ako hocete da nas kontaktirate nasa adresa je</p>
<Link to="/kontakt">Kontakt</Link>
<p>A ako hocete da odete na neku drugu stranicu</p>
<Link to="/neka">Neka stranica</Link>
</footer>
)
}

export default Footer