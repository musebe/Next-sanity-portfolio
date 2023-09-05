import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TableOfContents from '@/app/components/TableOfContent';

describe('TableOfContents', () => {
  const mockTocItems = [
    { anchor: 'section-1', text: 'Section 1' },
    { anchor: 'section-2', text: 'Section 2' },
  ];
  const mockReadingEmojis = ['😀', '📚'];

  beforeEach(() => {
    render(
      <TableOfContents
        tocItems={mockTocItems}
        readingEmojis={mockReadingEmojis}
      />
    );
  });

  it('should render correctly', () => {
    const container = screen.getByTestId('toc-container');
    // @ts-ignore
    expect(container).toBeInTheDocument();
  });

  it('should have a heading "Table of Contents"', () => {
    const heading = screen.getByText('Table of Contents');
    // @ts-ignore
    expect(heading).toBeInTheDocument();
  });

  it('should render the correct number of toc items', () => {
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(mockTocItems.length);
  });

  it('should render the toc items with correct emojis and text', () => {
    mockTocItems.forEach((item, index) => {
      // Use a RegExp or function to make your text matcher more flexible
      const listItem = screen.getByText(new RegExp(item.text, 'i'));

      // @ts-ignore
      expect(listItem).toBeInTheDocument();
      // @ts-ignore
      expect(listItem).toHaveTextContent(
        mockReadingEmojis[index % mockReadingEmojis.length] + ' ' + item.text
      );
    });
  });
});
