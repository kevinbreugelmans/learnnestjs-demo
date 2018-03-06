import Layout from '../components/MyLayout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const PostLink = (props) => {
  console.log(props);
  return (
    <li>
      <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
        <a>{props.title}</a>
      </Link>
    </li>
)}

const Index = (props) => {

  return (
  <Layout>
    <h1>En hopsa alweer een blog</h1>,
    <ul>
      {props.shows.map((show, index) => {
        return (
        <PostLink key={'show-'+index} id={show.show.id} title={show.show.name}  />  
      )})
      }
    </ul>
  </Layout>
)}

Index.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json()
  console.log('data fetched: ');
  return {
    shows: data
  }
}

export default Index
