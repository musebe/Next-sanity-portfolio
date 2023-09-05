import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import Home from '@/app/page';
describe('<Home />', () => {
  it('should render the user profile image', () => {
    render(<Home />);
    const image = screen.getByAltText('Picture of Eugene Musebe');
    expect(image).toBeInTheDocument();
  });

  it('should render the title Musebecodes', () => {
    render(<Home />);
    const title = screen.getByText('Musebecodes');
    expect(title).toBeInTheDocument();
  });

  it('should render the user description', () => {
    render(<Home />);
    const description = screen.getByText(
      /Experienced Full Stack Software Craftsman offering end-to-end solutions for various technology projects./i
    );
    expect(description).toBeInTheDocument();
  });

  it('should render social media links', () => {
    render(<Home />);
    const githubLink = screen.getByLabelText('GitHub');
    const linkedinLink = screen.getByLabelText('LinkedIn');
    const twitterLink = screen.getByLabelText('Twitter');
    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
    expect(twitterLink).toBeInTheDocument();
  });

  it('should render the SubscribeNewsletter component', () => {
    render(<Home />);
    const subscribeHeading = screen.getByText(
      '📭 Subscribe to My Newsletter 🚀'
    );
    const subscribeParagraph = screen.getByText(
      /Stay updated with the latest articles, tips, and tutorials on Full Stack Development, Technical Writing, and Developer Advocacy!/i
    );
    const subscribeButton = screen.getByText('Sign Me Up !');
    expect(subscribeHeading).toBeInTheDocument();
    expect(subscribeParagraph).toBeInTheDocument();
    expect(subscribeButton).toBeInTheDocument();
  });
});
