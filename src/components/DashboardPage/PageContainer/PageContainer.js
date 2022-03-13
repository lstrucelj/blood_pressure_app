import React, { useState, useEffect, useRef } from 'react'
import {
    Content,
    Header,
    PageSecContainer,
    PageSecTopWrapper,
    Title,
    Systolic,
    UoM,
    Value,
    Diastolic,
    Wrapper,
    PageSecBottomWrapper,
    ChangeValueWrapper,
    ChangeIntervalWrapper,
    SwitchScaleWrapper,
    ChartWrapper,
    ButtonWrapper,
    ButtonIcon,
    GroupButton,
    LeftButton,
    RightButton,
    ChartContainer,
    Inputs,
    RightWrapper,
    ValueBox
} from './PageContainer.elements'
import { Expand, Replay5Outlined } from '@mui/icons-material'
import { makeStyles } from "@material-ui/core"
import Histogram from './Histogram/Histogram'
import { getData, createSeries, graphOptions } from '../../../utils/utils.js'

const useStyle = makeStyles(() => ({
    label: {
        '& label.Mui-focused': {
            color: '#912b4d',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#912b4d',
            },
        }
    }
}))

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest function.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

const PageContainer = () => {

    const classes = useStyle()
    const [scale, setScale] = useState(true)

    const [minmax, setMinMax] = useState(false)
    const [interval, setInterval] = useState(false);

    const [histogramData, setHistogramData] = useState([])
    const [series, setSeries] = useState([])
    const [options, setOptions] = useState({})

    const [pollInterval, setPollInterval] = useState('5');

    const [minValue, setminValue] = useState('');
    const [maxValue, setmaxValue] = useState('');

    useEffect(async () => {
        const data = await getData();
        setHistogramData(data);
        setSeries([
            createSeries('Systolic', data.map((item) => item.systolic)),
            createSeries('Diastolic', data.map((item) => item.diastolic))
        ]);
        graphOptions.xaxis = {
            categories: data.map((item) => item.date.toLocaleDateString()),
        }
        setOptions(graphOptions)
    }, []);

    useInterval(() => {
        const systolic = Math.floor(Math.random() * (140 - 100 + 1) + 100);
        const diastolic = Math.floor(Math.random() * (100 - 50 + 1) + 50);
        let array = [...histogramData, { date: new Date(), systolic, diastolic }];
        setHistogramData(array);
        setSeries([
            createSeries('Systolic', array.map((item) => item.systolic)),
            createSeries('Diastolic', array.map((item) => item.diastolic))
        ]);
        graphOptions.xaxis = {
            categories: array.map((item) => item.date.toLocaleDateString()),
        }
        setOptions(graphOptions)
    }, (pollInterval * 1000));


    function onScaleChange(change) {
        setOptions((prev) => {
            let update = Object.assign({}, prev)
            update.yaxis.logarithmic = change;
            return update;
        });
    }

    function onMinMaxChange(change) {
        setMinMax(prev => !prev);
        if (minmax && minValue != '' && maxValue != '') {
            setOptions((prev) => {
                let update = Object.assign({}, prev)
                update.yaxis.min = parseInt(minValue);
                update.yaxis.max = parseInt(maxValue);
                return update;
            });
        }
    }

    // function onPollChange(change) {
    //     setInterval(prev => !prev);
    //     if (interval && pollInterval != '') {

    //     }
    // }

    return (
        <PageSecContainer>
            <PageSecTopWrapper>
                <Header>Blood Pressure</Header>
                <Content>
                    <Wrapper>
                        <Systolic>
                            <Title>systolic</Title>
                            <UoM>mmgh</UoM>
                            <Value>
                                {histogramData &&
                                    [...histogramData].pop()?.systolic
                                }
                            </Value>
                        </Systolic>
                        <Diastolic>
                            <Title>diastolic</Title>
                            <UoM>mmgh</UoM>
                            <Value>
                                {histogramData &&
                                    [...histogramData].pop()?.diastolic
                                }
                            </Value>
                        </Diastolic>
                    </Wrapper>
                </Content>
            </PageSecTopWrapper>
            <PageSecBottomWrapper>
                <ChangeValueWrapper>
                    <RightWrapper>
                        {minmax == true &&
                            <Inputs>
                                <ValueBox
                                    className={classes.label}
                                    id="outlined-basic"
                                    label="Min"
                                    variant="outlined"
                                    size='small'
                                    sx={{ width: '8ch', marginRight: '5px' }}
                                    value={minValue}
                                    onChange={(e) => setminValue(e.target.value)}
                                />
                                <ValueBox
                                    className={classes.label}
                                    id="outlined-basic"
                                    label="Max"
                                    variant="outlined"
                                    size='small'
                                    sx={{ width: '8ch' }}
                                    value={maxValue}
                                    onChange={(e) => setmaxValue(e.target.value)}

                                />
                            </Inputs>
                        }
                        <ButtonWrapper>
                            <ButtonIcon minmax={minmax ? 1 : 0} title="Change displayed value" onClick={() => { onMinMaxChange(prev => !prev) }}>
                                <Expand />
                            </ButtonIcon>
                        </ButtonWrapper>
                    </RightWrapper>
                </ChangeValueWrapper>
                <ChangeIntervalWrapper>
                    <RightWrapper>
                        {interval &&
                            <Inputs>
                                <ValueBox
                                    className={classes.label}
                                    id="outlined-basic"
                                    label="Sec"
                                    variant="outlined"
                                    size='small'
                                    sx={{ width: '8ch' }}
                                    value={pollInterval}
                                    onChange={(e) => setPollInterval(e.target.value)} />
                            </Inputs>
                        }
                        <ButtonWrapper>
                            <ButtonIcon title="Change poll interval" interval={interval ? 1 : 0} onClick={() => { setInterval(!interval) }}>
                                <Replay5Outlined />
                            </ButtonIcon>
                        </ButtonWrapper>
                    </RightWrapper>
                </ChangeIntervalWrapper>
                <SwitchScaleWrapper>
                    <GroupButton variant="contained" aria-label="outlined button group">
                        <LeftButton active={scale ? 1 : 0} onClick={() => {
                            setScale(true);
                            onScaleChange(false);
                        }}>Linear</LeftButton>
                        <RightButton active={scale ? 0 : 1} onClick={() => {
                            setScale(false);
                            onScaleChange(true);
                        }}>Logaritmic</RightButton>
                    </GroupButton>
                </SwitchScaleWrapper>
                <ChartContainer>
                    <ChartWrapper>
                        <Histogram series={series} options={options} scale={scale} />
                    </ChartWrapper>
                </ChartContainer>
            </PageSecBottomWrapper>
        </PageSecContainer >
    )
}

export default PageContainer