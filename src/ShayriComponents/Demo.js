import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: 'url("your_background_image_url_here")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
  },
  shayariContainer: {
    textAlign: 'center',
    padding: '32px', // Adjust padding as needed
  },
  shayariText: {
    fontSize: '18px',
    lineHeight: '1.5',
  },
}));

const Demo = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.shayariContainer}>
        <h1>Fantastic Shayari</h1>
        <p className={classes.shayariText}>
          {/* Your Shayari content goes here */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus mattis nibh vel lacus tempor, ut maximus neque
          convallis. Sed consequat ultricies enim, at sollicitudin
          mauris sodales sed.
        </p>
      </div>
    </Container>
  );
};

export default Demo;
