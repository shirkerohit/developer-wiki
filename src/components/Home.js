import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, Library, Database, BookOpen, Code2, Layout, ExternalLink, Camera } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';

import courses from '../data/courses';
import documentation from '../data/documentation';
import hosting from '../data/hosting';
import tools from '../data/tools';
import Header from './Header';

const categories = [
    { name: 'All', icon: Library },
    { name: 'Tools', icon: Code2 },
    { name: 'Hosting', icon: Database },
    { name: 'Documentation', icon: BookOpen },
    { name: 'Courses', icon: Layout }
];

// Initial data - later can be moved to separate files
const initialResources = [
];

export default function Home() {

    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const searchInputRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === '/') {
                event.preventDefault();
                searchInputRef.current.focus();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    // Custom search function
    const searchResources = (resources, query) => {
        const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);

        return resources.filter(resource => {
            if (searchTerms.length === 0) return true;

            const searchableText = [
                resource.title,
                resource.description,
                ...resource.tags,
                resource.category
            ].join(' ').toLowerCase();

            return searchTerms.every(term => searchableText.includes(term));
        });
    };

    // Memoized filtered resources
    const filteredResources = useMemo(() => {

        if (initialResources.length === 0) {
            initialResources.push(...courses, ...documentation, ...hosting, ...tools);
            // limit only 20 resources
            initialResources.length = 20;
        }

        let filtered = initialResources;

        if (selectedCategory !== 'All') {
            filtered = filtered.filter(resource => resource.category === selectedCategory);
        }

        if (searchQuery) {
            filtered = searchResources(filtered, searchQuery);
        }

        return filtered;
    }, [selectedCategory, searchQuery]);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <Header></Header>

            {/* Search and Category filters */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="relative mx-auto mb-6">
                    <Input
                        type="text"
                        placeholder="Search resources... (Press '/' to focus)"
                        className="pl-10 w-full"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        ref={searchInputRef}
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
                <div className="flex flex-wrap gap-2">
                    {categories.map(({ name, icon: Icon }) => (
                        <button
                            key={name}
                            onClick={() => setSelectedCategory(name)}
                            className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${selectedCategory === name
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                        >
                            <Icon className="h-4 w-4 mr-2" />
                            {name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Resources grid */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredResources.map((resource, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow">
                            <CardHeader className="pb-3 flex">
                                <div className="flex justify-between">
                                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                                    <a
                                        href={resource.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                    </a>
                                </div>
                                <CardDescription>{resource.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="pb-3">
                                <div className="flex flex-wrap gap-2">
                                    {resource.tags.map(tag => (
                                        <Badge key={tag} variant="secondary">{tag}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="pt-3 border-t">
                                <a
                                    href={resource.contributor.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-gray-600 hover:text-gray-900"
                                >
                                    <Camera className="h-4 w-4 mr-2" />
                                    <span className="text-sm">Contributed by {resource.contributor.name}</span>
                                </a>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    );
}