import './App.css';
import Card from './Card';


function App() {
  return (
    
    <div className="wrapper">
      <Card
        img="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        title="Web Developer"
        description="Lorem ipsum, dolor sit amet adipisicing elit. Asperiores sint incidunt molestiae velit ad quae, consectetur tenetur voluptate repudiandae enim!"
      />

      <Card
        img="https://plus.unsplash.com/premium_photo-1663047716627-e0b6c878761e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        title="Programmer"
        description="Lorem ipsum, dolor sit amet adipisicing elit. Asperiores sint incidunt molestiae velit ad quae, consectetur tenetur voluptate repudiandae enim!"
      />

      <Card
        img="https://plus.unsplash.com/premium_photo-1661270460275-803dfb0cbdac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
        title="Open Source Contributor"
        description="Lorem ipsum, dolor sit amet adipisicing elit. Asperiores sint incidunt molestiae velit ad quae, consectetur tenetur voluptate repudiandae enim!"
      />
    </div>
  );
}

export default App;
