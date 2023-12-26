import { ResponsivePie } from '@nivo/pie';

type GraphSection = {
    id: string,
    label: string,
    value: number,
    color: string,
}

function IssueStateGraph({data} : {data: GraphSection[]}) {
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

