import { getPosts } from '@/service/postService';
import { IPost } from '@/types';
import React, { useEffect, useState } from 'react';
import TableManager from './components/TableManager';
import TablePagination from './components/TablePagination';
import TableToolbar from './components/TableToolbar';

const PostManagementPage = () => {
  const [data, setData] = useState<IPost[] | undefined>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilter] = useState({
    _page: 1,
    _limit: 10,
  });

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await getPosts(filters);
      setData(() => res);
    } catch (error) {
      console.log('🚀 ~ fetchData ~ error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [JSON.stringify(filters)]);
  return (
    <div className="px-5 py-10">
      <TableToolbar />
      <TableManager data={data} />
      <TablePagination filter />
    </div>
  );
};

export default PostManagementPage;
