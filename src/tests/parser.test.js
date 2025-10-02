import { parse } from './../parser';

describe('parser', () => {
  it('should parse strings with <h1> and <p> tags', () => {
    const htmlString = '<h1>Hello</h1><p>world</p>';
    const expectedResult = {
      "nodeName": "DOCUMENT",
      "children": [
        {
          "nodeName": "HTML",
          "children": [
            {
              "nodeName": "HEAD",
              "children": []
            },
            {
              "nodeName": "BODY",
              "children": [
                {
                  "nodeName": "H1",
                  "children": [
                    { "nodeName": "#text", "value": "Hello" }
                  ]
                },
                {
                  "nodeName": "P",
                  "children": [
                    { "nodeName": "#text", "value": "world" }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };

    const result = parse(htmlString);
    expect(result).toEqual(expectedResult)
  })
})