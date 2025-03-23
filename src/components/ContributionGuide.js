import React, { useEffect, useState } from 'react';
import Header from './Header';
import readmeContent from '../data/README.md';
import { marked } from 'marked';
import 'github-markdown-css/github-markdown.css';

export default function ContributionGuide() {
    const [readme, setReadme] = useState('');

    useEffect(() => {
        fetch(readmeContent)
            .then(response => response.text())
            .then(text => setReadme(marked(text)));
    }, []);

    return (
        <>
            <Header />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <h1 className="text-3xl font-bold mb-4">Contribution Guide</h1>
                <p className="text-lg text-gray-700">
                    We welcome contributions from the community! If you would like to contribute to DevWiki, please follow
                    our contribution guidelines. You can find the guidelines on our
                    <a href="https://github.com/shirkerohit/developer-wiki#" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800"> GitHub repository</a>.
                </p>
                <div className="mt-8 markdown-body !bg-white">
                    <div className="text-lg text-gray-700 !bg-white" dangerouslySetInnerHTML={{ __html: readme }} />
                </div>
            </div>
        </>
    );
}
