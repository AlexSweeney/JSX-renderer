import { parse, makeTree, addAtNode } from './../parser';

describe('parser', () => {
  it('should parse html string', () => {
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

describe('makeTree()', () => {
  describe('if passed an array of strings', () => {
    it('should return a tree of children', () => {
      const tags = ['ONE', 'TWO', 'THREE', 'FOUR'];
      const expectedResult = {
        nodeName: "ONE",
        children: [
          {
            nodeName: "TWO",
            children: [
              {
                nodeName: "THREE",
                children: [
                  {
                    nodeName: "FOUR",
                    children: []
                  },
                ]
              },
            ]
          },
        ]
      };

      const result = makeTree(tags);
      expect(result).toEqual(expectedResult);
    })
  })

  describe('if passed an array of arrays', () => {
    it('should return an array of siblings', () => {
      const tags = [['ONE', 'TWO']];
      const expectedResult = [
        {
          nodeName: "ONE",
          children: []
        },
        {
          nodeName: "TWO",
          children: []
        }
      ];

      const result = makeTree(tags);
      expect(result).toEqual(expectedResult);
    })
  })

  describe('if passed and array of matrixes', () => {
    it('should make correct tree', () => {
      const tags = [['ONE', ['TWO', ['THREE', 'FOUR']], 'FIVE', 'SIX']];
      const expectedResult = [
        {
          nodeName: 'ONE',
          children: [
            {
              nodeName: 'TWO',
              children: [
                {
                  nodeName: 'THREE',
                  children: []
                },
                {
                  nodeName: 'FOUR',
                  children: []
                }
              ]
            },

          ]
        },
        {
          nodeName: 'FIVE',
          children: []
        },
        {
          nodeName: 'SIX',
          children: []
        }
      ];

      const result = makeTree(tags);
      expect(result).toEqual(expectedResult);
    })
  })

  describe('if passed an array of strings and arrays', () => {
    it('should make correct tree', () => {
      const tags = ['ONE', 'TWO', ['THREE-A', 'THREE-B'], "FOUR"];
      const expectedResult = {
        nodeName: "ONE",
        children: [
          {
            nodeName: "TWO",
            children: [
              {
                nodeName: "THREE-A",
                children: []
              },
              {
                nodeName: "THREE-B",
                children: [],
              },
              {
                nodeName: "FOUR",
                children: [],
              }
            ]
          },

        ]
      };

      const result = makeTree(tags);
      expect(result).toEqual(expectedResult);
    })
  })

  describe('if pass an array of strings, arrays, and matrixes', () => {
    it('should return correct tree', () => {
      const tags = ['ONE', 'TWO', ['THREE', ['FOUR', 'FIVE'], 'SIX'], 'SEVEN', ['EIGHT', 'NINE']];
      const expectedResult = {
        nodeName: 'ONE',
        children: [{
          nodeName: 'TWO',
          children: [
            {
              nodeName: 'THREE',
              children: [
                {
                  nodeName: 'FOUR',
                  children: []
                },
                {
                  nodeName: 'FIVE',
                  children: []
                }
              ]
            },
            {
              nodeName: 'SIX',
              children: []
            },
            {
              nodeName: 'SEVEN',
              children: [
                {
                  nodeName: 'EIGHT',
                  children: []
                },
                {
                  nodeName: 'NINE',
                  children: []
                }
              ]
            }
          ],
        }]
      };

      const result = makeTree(tags);
      expect(result).toEqual(expectedResult);
    })
  })
})

describe('addAtNode()', () => {
  describe('when passed tree with children', () => {
    it('should add content at correct node', () => {
      const tree = {
        nodeName: "ONE",
        children: [
          {
            nodeName: "TWO",
            children: [
              {
                nodeName: "THREE",
                children: [
                  {
                    nodeName: "FOUR",
                    children: []
                  },
                ]
              },
            ]
          },
        ]
      };
      const children = ['child-one', 'child-two'];

      const expectedResult = {
        nodeName: "ONE",
        children: [{
          nodeName: "TWO",
          children: [{
            nodeName: "THREE",
            children: [{
              nodeName: "FOUR",
              children: children,
            }]
          }]
        }]
      };

      addAtNode(tree, "FOUR", children);
      expect(tree).toEqual(expectedResult)
    })
  })

  describe('when passed tree with siblings', () => {
    it('should add content at correct node', () => {
      const tree = {
        nodeName: "ONE",
        children: [
          {
            nodeName: "TWO",
            children: []
          },
          {
            nodeName: "THREE",
            children: []
          },
        ]
      };
      const children = ['child-one', 'child-two'];

      const expectedResult = {
        nodeName: "ONE",
        children: [
          {
            nodeName: "TWO",
            children: []
          },
          {
            nodeName: "THREE",
            children: children
          },
        ]
      };

      addAtNode(tree, 'THREE', children)
      expect(tree).toEqual(expectedResult);
    })
  })

  describe('when passed tree with children and siblings', () => {
    it('should add content at correct node', () => {
      const tree = {
        nodeName: "ONE",
        children: [
          {
            nodeName: "TWO",
            children: []
          },
          {
            nodeName: "THREE",
            children: [
              {
                nodeName: "FOUR",
                children: [],
              }
            ]
          },
        ]
      };
      const children = ['child-one', 'child-two'];

      const expectedResult = {
        nodeName: "ONE",
        children: [
          {
            nodeName: "TWO",
            children: []
          },
          {
            nodeName: "THREE",
            children: [
              {
                nodeName: "FOUR",
                children: children
              }
            ]
          },
        ]
      };

      addAtNode(tree, 'FOUR', children)
      expect(tree).toEqual(expectedResult);
    })
  })
})