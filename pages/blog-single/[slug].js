import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import blogs from '../../api/blogs'
import PageTitle from '../../components/pagetitle';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import BlogSingleSection from '../../components/BlogDetails';


const BlogSingle = (props) => {
    const router = useRouter()

    const BlogDetails = blogs.find(item => item.slug === router.query.slug)


    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={BlogDetails?.title} pagesub="blog" />
            <BlogSingleSection/>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};
export default BlogSingle;
