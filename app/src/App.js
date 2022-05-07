import './App.scss';
import Testimonial from './Testimonial';
import {testimonials} from './data';

const testimonialCards = testimonials.map(testimonial =>
  <Testimonial
    key={testimonial.name}
    data={testimonial}
  />
);

function App() {
  return (
    <div className="card-wrapper">
      {testimonialCards}
    </div>
  );
}

export default App;
