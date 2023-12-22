import { ResponsivePie } from '@nivo/pie';

function IssueStateGraph() {
  return (
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                itemHeight: 18,
                itemWidth: 100,
                itemOpacity: 1,
                symbolSize: 15,
                symbolShape: 'circle',
                translateX: 60
            },
        ]}
    ></ResponsivePie>
  )
}

export default IssueStateGraph

const data = [
    {
        "id": "Backlog",
        "label": "Backlog",
        "value": 11,
        "color": "rgb(100,240,100)"
    },
    {
        "id": "Todo",
        "label": "Todo",
        "value": 11,
        "color": "rgb(240,100,100)"
    },
    {
        "id": "In progress",
        "label": "In progress",
        "value": 11,
        "color": "rgb(100,100,100)"
    },
    {
        "id": "Done",
        "label": "Done",
        "value": 11,
        "color": "rgb(100,100,100)"
    },
    {
        "id": "Cancelled",
        "label": "Cancelled",
        "value": 11,
        "color": "rgb(255,100,100)"
    },
]
