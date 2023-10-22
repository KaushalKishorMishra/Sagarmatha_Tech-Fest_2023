import { ThemeProvider } from '@emotion/react'
import React, { useEffect, useRef } from 'react'
import { theme } from '../../themes/Theme'
import { Box, Container, List, ListItem, Typography } from '@mui/material'

const AboutPage = () => {

    return (
        <ThemeProvider theme={theme}>
            <Container>

                <Box>
                    
                </Box>

                <Box>
                    <Box>
                        <Box>
                            <Typography variant='title'>About Us</Typography>
                        </Box>
                        <Box>
                            <Typography variant='subtitle'>
                                Welcome to the official website of the Sagarmatha College TechFest, where innovation meets inspiration!
                            </Typography>
                        </Box>
                    </Box>

                    <Box>
                        <Box>
                            <Typography variant='title'>Who We Are:</Typography>
                        </Box>
                        <Box>
                            <Typography variant='subtitle'>
                                Sagarmatha College TechFest is an annual extravaganza of technology, creativity, and knowledge organized by the passionate and talented students of Sagarmatha College. Each year, we come together to showcase the power of innovation, educate, and inspire all those who share a love for technology and its potential to transform our world.
                            </Typography>
                        </Box>
                    </Box>

                    <Box>
                        <Box>
                            <Typography variant='title'>What We Do:</Typography>
                        </Box>
                        <Box>
                            <Typography variant='subtitle'>
                                At TechFest, we believe that technology is not just about gadgets; it's about solving real-world problems and shaping the future. Our event serves as a hub for students, tech enthusiasts, and industry professionals to connect, collaborate, and explore the latest advancements in various fields such as robotics, artificial intelligence, renewable energy, virtual reality, and more.
                            </Typography>
                        </Box>
                    </Box>

                    <Box>
                        <Box>
                            <Typography variant='title'>Our Mission:</Typography>
                        </Box>
                        <Box>
                            <Typography variant='subtitle'>
                                Our mission is to foster a culture of innovation and learning. We aim to inspire the next generation of tech leaders and entrepreneurs by providing a platform for them to showcase their skills, share their ideas, and learn from experts in the industry. We believe that every innovative idea has the potential to change the world, and TechFest is the place where those ideas come to life.
                            </Typography>
                        </Box>
                    </Box>

                    <Box>
                        <Box>
                            <Typography variant='title'>What to Expect:</Typography>
                        </Box>
                        <Box>
                            <List>
                                <ListItem>
                                    <Typography variant='subtitle'>
                                        Cutting-Edge Exhibits: Explore a fascinating array of exhibits that unveil the latest technological breakthroughs and projects created by our talented students.
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant='subtitle'>
                                        Hands-On Workshops: Participate in workshops and seminars conducted by experts, where you can gain new skills and insights.
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant='subtitle'>
                                        Hackathon Challenges: Put your coding skills to the test in exciting hackathons and coding competitions.
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant='subtitle'>
                                        Inspiring Speakers: Interact with industry leaders and experts who will share their knowledge and insights on the future of technology.
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant='subtitle'>
                                        Networking Opportunities: Connect with like-minded individuals, entrepreneurs, and technology enthusiasts who share your passion.
                                    </Typography>
                                </ListItem>
                            </List>
                        </Box>
                    </Box>

                    <Box>
                        <Box>
                            <Typography variant='title'>Join Us:</Typography>
                        </Box>
                        <Box>
                            <Typography variant='subtitle'>
                                The Sagarmatha College TechFest is a celebration of the limitless possibilities that technology offers. Whether you're a student eager to learn, an aspiring entrepreneur looking for inspiration, or a tech enthusiast seeking the latest innovations, our event has something for everyone. Be part of this exciting journey and witness the future at Sagarmatha College TechFest!
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default AboutPage
