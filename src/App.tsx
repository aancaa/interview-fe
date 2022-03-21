import { useEffect, useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Spinner} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DetailNews from 'components/DetailNews';

function App() {
  
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  async function getNews(title: string) {
    const request = await fetch(`https://newsapi.org/v2/everything?q=${title}&apiKey=f93e8cdceab34608aee68031f84acd5b`);
    const response = await request.json();
    setNews(response.articles)
    setIsLoading(false);
    console.log(news)
  }

  useEffect(() => {
    // Select DOM element for search form typescript
    const form = document.querySelector('form')!;
    // Add event listener to search form
    form.addEventListener('submit', (e: Event) => {
      e.preventDefault();
      setIsLoading(true);
      const searchTitle = (document.querySelector('input') as HTMLInputElement).value!;
      getNews(searchTitle);
    });
  }, []);
  return (
    <div className="App container ">
      <h1 className="font-bold my-5">News API</h1>
      <div>
        <Form inline>
          <FormGroup floating>
            <Input bsSize="sm" type="text" placeholder="Search News" required />
            <Label for="exampleEmail">Search News</Label>
          </FormGroup>{' '}
          <div className="flex justify-start">
            <Button outline color="primary">Search</Button>
          </div>
        </Form>
      </div>
      {isLoading && (
        <Spinner>
        Loading...
      </Spinner>
      )}
      <hr className='border-t-2 border-black my-5'/>
      <div className='grid grid-cols-3 gap-6 mt-4'>
        {news.map(item => (
          <DetailNews news={item}/>
        ))}
      </div>
    </div>
  );
}

export default App;
