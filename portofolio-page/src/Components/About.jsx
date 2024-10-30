import React from "react"
import transition from '../transition'
import { motion } from 'framer-motion'
import Timeline from "@mui/lab/Timeline"
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function About (){
    const NavigateCard1 = () => {
        window.location.href = "https://file.notion.so/f/f/9ef38880-1886-44b1-af6f-7b8f359595ca/f6d3635e-cad7-499e-b9f7-bdb5ec1e0d63/Object_Detection_For_Home_Security_Using_YOLOv7_Model.pdf?table=block&id=e2b8d8d0-dc99-47fc-a3b1-625c5a89f298&spaceId=9ef38880-1886-44b1-af6f-7b8f359595ca&expirationTimestamp=1730347200000&signature=yPmntRAwQ2STwWVbzMiLKvV-iISfEFilcArViEBmh4A&downloadName=Object+Detection+For+Home+Security+Using+YOLOv7+Model.pdf";
    }

    const NavigateCard2 = () => {
        window.location.href = "https://public.tableau.com/views/SalesDashboard_16955419266560/SalesDashboard2?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
    }

    const NavigateCard3 = () => {
        window.location.href = "https://file.notion.so/f/f/9ef38880-1886-44b1-af6f-7b8f359595ca/b669c04f-116a-4f6f-b7bc-d44280e5dd99/Project_Predictive_Analytics_Terhadap_Penyakit_COVID-19_-_Kelompok_1.pdf?table=block&id=e12dd4a3-108f-47c6-9c40-e0c4807cf913&spaceId=9ef38880-1886-44b1-af6f-7b8f359595ca&expirationTimestamp=1730347200000&signature=B65sSjrranCazNXoPFm2dlLnxXq9O2cy7-4vhXIjnhw&downloadName=Project+Predictive+Analytics+Terhadap+Penyakit+COVID-19+-+Kelompok+1.pdf"
    }

    const NavigateCard4 = () => {
        window.location.href = "https://file.notion.so/f/f/9ef38880-1886-44b1-af6f-7b8f359595ca/90c8d0c3-36fc-4a54-a518-967029687dcc/CORRELATION_BETWEEN_THE_NUMBERS_OF_PRIVATE_VEHICLE_AND_TRAFFIC_CONGESTION.pdf?table=block&id=4b2848a5-6b76-461d-b34f-e527fe63ac4a&spaceId=9ef38880-1886-44b1-af6f-7b8f359595ca&expirationTimestamp=1730347200000&signature=1DR4HGe0OV620CMdYT2Z7J8khKYgwWmlaz7QsffLIVY&downloadName=CORRELATION+BETWEEN+THE+NUMBERS+OF+PRIVATE+VEHICLE+AND+TRAFFIC+CONGESTION.pdf"
    }

    return(
        <>
        <div className="flex justify-center items-center min-h-screen bg-slate-900">
            <div className="flex flex-row w-full max-w-6xl">
                {/* Education */}
                <div className="flex flex-col w-1/2 items-center">
                    <h1 className="text-2xl font-bold text-white mb-5 flex ">Education</h1>
                        <motion.div>
                            <Timeline
                            sx={{
                                [`& .${timelineItemClasses.root}:before`]: {
                                flex: 0,
                                padding: 0,
                                },
                            }}
                        >
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <motion.div
                                    whileHover={{
                                        scale: 1.1,
                                        backgroundColor:'#334155',
                                        border: "2px solid #06b6d4",
                                        padding : "10px"
                                    }}
                                    transition={{
                                        duration:0.5
                                    }}
                                    style={{
                                        border: "2px solid transparent",
                                        borderRadius : "8px",
                                    }}
                                >
                                    <TimelineContent color= "white">
                                        <p className="pb-2 text-sky-300">August 2018</p>
                                        <h2 className="font-bold">High School Diploma</h2>
                                        <p className="text-sm">Canisius College - Natural Science</p>
                                        <p className="text-sm text-gray-300">Aug 2018 - May 2021</p>
                                    </TimelineContent>
                                </motion.div>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <motion.div
                                    whileHover={{
                                        scale: 1.1,
                                        backgroundColor:'#334155',
                                        border: "2px solid #06b6d4",
                                        padding : "10px"
                                    }}
                                    transition={{
                                        duration:0.5
                                    }}
                                    style={{
                                        border: "2px solid transparent",
                                        borderRadius : "8px",
                                    }}
                                >
                                    <TimelineContent color= "white">
                                        <p className="pb-2 text-sky-300">August 2021</p>
                                        <h2 className="font-bold">Bachelor Degree</h2>
                                        <p className="text-sm">Binus University - Computer Science</p>
                                        <p className="text-sm text-gray-300">Aug 2021 - Present</p>
                                    </TimelineContent>
                                </motion.div>
                            </TimelineItem>

                        </Timeline>
                        </motion.div>
                </div>
                {/* Experience */}
                <div className="w-1/2 flex flex-col items-center">
                    <h1 className="text-2xl font-bold text-white mb-5 ">Experience</h1>
                        <Timeline
                            sx={{
                                [`& .${timelineItemClasses.root}:before`]: {
                                flex: 0,
                                padding: 0,
                                },
                            }}
                        >
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <motion.div
                                    whileHover={{
                                        scale: 1.1,
                                        backgroundColor:'#334155',
                                        border: "2px solid #06b6d4",
                                        padding : "10px"
                                    }}
                                    transition={{
                                        duration:0.5
                                    }}
                                    style={{
                                        border: "2px solid transparent",
                                        borderRadius : "8px",
                                    }}
                                >
                                <TimelineContent color= "white">
                                    <p className="pb-2 text-sky-300">March 2022</p>
                                    <h2 className="font-bold">Member of Web Development Division</h2>
                                    <p className="text-sm">HIMTI BINUS University - Full Time</p>
                                    <p className="text-sm text-gray-300">Mar 2021 - Nov 2023</p>
                                </TimelineContent>
                            </motion.div>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <motion.div
                                    whileHover={{
                                        scale: 1.1,
                                        backgroundColor:'#334155',
                                        border: "2px solid #06b6d4",
                                        padding : "10px"
                                    }}
                                    transition={{
                                        duration:0.5
                                    }}
                                    style={{
                                        border: "2px solid transparent",
                                        borderRadius : "8px",
                                    }}
                                >
                                <TimelineContent color= "white">
                                    <p className="pb-2 text-sky-300">April 2022</p>
                                    <h2 className="font-bold">Member of HISHOT 2022 Committe</h2>
                                    <p className="text-sm">HIMTI BINUS University - Full Time</p>
                                    <p className="text-sm text-gray-300">Apr 2022 - Jul 2022</p>
                                </TimelineContent>
                            </motion.div>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <motion.div
                                    whileHover={{
                                        scale: 1.1,
                                        backgroundColor:'#334155',
                                        border: "2px solid #06b6d4",
                                        padding : "10px"
                                    }}
                                    transition={{
                                        duration:0.5
                                    }}
                                    style={{
                                        border: "2px solid transparent",
                                        borderRadius : "8px",
                                    }}
                                >
                                <TimelineContent color= "white">
                                    <p className="pb-2 text-sky-300">August 2022</p>
                                    <h2 className="font-bold">Freshman Leader for Binusian 2026</h2>
                                    <p className="text-sm">BINUS University - Full Time</p>
                                    <p className="text-sm text-gray-300">Aug 2022 - Sep 2022</p>
                                </TimelineContent>
                            </motion.div>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <motion.div
                                    whileHover={{
                                        scale: 1.1,
                                        backgroundColor:'#334155',
                                        border: "2px solid #06b6d4",
                                        padding : "10px"
                                    }}
                                    transition={{
                                        duration:0.5
                                    }}
                                    style={{
                                        border: "2px solid transparent",
                                        borderRadius : "8px",
                                    }}
                            >
                                <TimelineContent color= "white">
                                    <p className="pb-2 text-sky-300">November 2022</p>
                                    <h2 className="font-bold">Contestant</h2>
                                    <p className="text-sm">ICPC - International Collegiate Programming Contest</p>
                                    <p className="text-sm text-gray-300">Nov 2022 - Nov 2022</p>
                                </TimelineContent>
                            </motion.div>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <motion.div
                                    whileHover={{
                                        scale: 1.1,
                                        backgroundColor:'#334155',
                                        border: "2px solid #06b6d4",
                                        padding : "10px"
                                    }}
                                    transition={{
                                        duration:0.5
                                    }}
                                    style={{
                                        border: "2px solid transparent",
                                        borderRadius : "8px",
                                    }}
                            >
                                <TimelineContent color= "white">
                                    <p className="pb-2 text-sky-300">December 2022</p>
                                    <h2 className="font-bold">Member of TECHFEST 2022 Committe</h2>
                                    <p className="text-sm">HIMTI BINUS University - Full time</p>
                                    <p className="text-sm text-gray-300">Dec 2022 - Dec 2022</p>
                                </TimelineContent>
                            </motion.div>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <motion.div
                                    whileHover={{
                                        scale: 1.1,
                                        backgroundColor:'#334155',
                                        border: "2px solid #06b6d4",
                                        padding : "10px"
                                    }}
                                    transition={{
                                        duration:0.5
                                    }}
                                    style={{
                                        border: "2px solid transparent",
                                        borderRadius : "8px",
                                    }}
                            >
                                <TimelineContent color= "white">
                                    <p className="pb-2 text-sky-300">February 2022</p>
                                    <h2 className="font-bold">Application Developer Intern</h2>
                                    <p className="text-sm">PT INSPIRO - Full time</p>
                                    <p className="text-sm text-gray-300">Feb 2024 - Sep 2024</p>
                                </TimelineContent>
                            </motion.div>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <motion.div
                                    whileHover={{
                                        scale: 1.1,
                                        backgroundColor:'#334155',
                                        border: "2px solid #06b6d4",
                                        padding : "10px"
                                    }}
                                    transition={{
                                        duration:0.5
                                    }}
                                    style={{
                                        border: "2px solid transparent",
                                        borderRadius : "8px",
                                    }}
                            >
                                <TimelineContent color= "white">
                                    <p className="pb-2 text-sky-300">September 2022</p>
                                    <h2 className="font-bold">Quality Assurance Intern</h2>
                                    <p className="text-sm">PT INSPIRO - Full time</p>
                                    <p className="text-sm text-gray-300">Aug 2024 - Feb 2025</p>
                                </TimelineContent>
                            </motion.div>
                        </TimelineItem>
                        </Timeline>
                </div>
            </div>
        </div>
        <div className="bg-black flex flex-col items-center pt-10 min-h-screen pb-10">
            <h1 className="text-white text-4xl mb-10 font-bold font-mono">PROJECTS</h1>
                <div className="grid grid-cols-3 gap-4">
                    <Card sx={{ maxWidth: 300 }}>
                        <CardMedia>
                            <iframe 
                            src="../src/assets/Object Detection For Home Security Using YOLOv7 Model.pdf" 
                            className="w-full rounded-lg"
                            />
                        </CardMedia>
                        <CardContent>
                                <Typography gutterBottom variant="h5" component="div" >
                                    Object Detection For Home Security Using YOLOv7 Model
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    This section outlines my research paper project about object detection with the title: 
                                    Object Detection For Home Security Using YOLOv7 Model. 
                                </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={NavigateCard1}>See More</Button>
                        </CardActions>
                    </Card>

                    <Card sx={{ maxWidth: 300 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="../src/assets/dashboard.png"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                United States and Canada Supermarket Sales Dashboard 
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                This section outlines my projects using Tableau to visualize datasets for 
                                sales of a supermarket in the United States and Canada
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={NavigateCard2}>See More</Button>
                        </CardActions>
                    </Card>
            
                    <Card sx={{ maxWidth: 300 }}>
                        <CardMedia>
                            <iframe 
                            src="../src/assets/Project Predictive Analytics Terhadap Penyakit COVID-19.pdf" 
                            className="w-full rounded-lg"
                            />
                        </CardMedia>
                        <CardContent>
                                <Typography gutterBottom variant="h5" component="div" >
                                    Predictive Analytics terhadap Penyakit COVID-19 Berdasarkan Gejala
                                    Menggunakan Algoritma Decision Tree
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    This section outlines my Predictive Analytics Project with the title: 
                                    Predictive Analytics terhadap Penyakit COVID-19 Berdasarkan Gejala
                                    Menggunakan Algoritma Decision Tree. 
                                </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={NavigateCard3}>See More</Button>
                        </CardActions>
                    </Card>

                    <Card sx={{ maxWidth: 300}}>
                        <CardMedia>
                            <iframe 
                            src="../src/assets/CORRELATION BETWEEN THE NUMBERS OF PRIVATE VEHICLE AND TRAFFIC CONGESTION.pdf" 
                            className="w-full rounded-lg"
                            />
                        </CardMedia>
                        <CardContent>
                                <Typography gutterBottom variant="h5" component="div" >
                                    CORRELATION BETWEEN THE NUMBERS OF PRIVATE VEHICLE AND TRAFFIC CONGESTION
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    This section outlines my project in my Data Management course, where my team used a Systematic Literature Review
                                    Method to find the correlation between the numbers of private vehicle and traffic congestion.
                                </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={NavigateCard4}>See More</Button>
                        </CardActions>
                    </Card>
                </div>
        </div>
        </>
    );
}

export default transition(About);