import { getPosts } from '@/service/postService';
import { IPost } from '@/types';
import { useCallback, useEffect, useState } from 'react';
import TableManager from './components/TableManager';
import TablePagination from './components/TablePagination';
import TableToolbar from './components/TableToolbar';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { paths } from '@/constants';
import { toast } from 'sonner';
import { cleanObject } from '@/helper';

const PostManagementPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [value, setValue] = useState<string>('userId');
  const [data, setData] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    _page: Number(searchParams.get('_page')) || 1,
    _limit: Number(searchParams.get('_limit')) || 10,
    userId: searchParams.get('userId') || null,
    title: searchParams.get('title') || null,
  });
  const [total] = useState(100); // fix cứng là 100 do api không trả về total
  const [selected, setSelected] = useState<IPost[]>([]);
  const { id } = useParams();
  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await getPosts(filters);
      setData(() => res);
      if (!id) {
        const _filters = cleanObject({ ...filters }) as Record<string, string>;
        navigate(`/${paths.postsManagement}?${new URLSearchParams(_filters).toString()}`, {
          replace: true,
        });
      }
    } catch (error) {
      toast.error('Something went wrong');
      navigate('/');
    } finally {
      setIsLoading(false);
    }
  }, [filters, navigate, id]);

  const handleCheckAll = useCallback(
    (checked: boolean) => {
      if (checked) {
        setSelected(() => data);
        return;
      }
      setSelected(() => []);
    },
    [data]
  );

  const handleCheckItem = useCallback((checked: boolean, post: IPost) => {
    if (checked) {
      setSelected((prev) => [...prev, post]);
      return;
    }
    setSelected((prev) => prev.filter((item) => item.id !== post.id));
  }, []);

  const handleChangePerPage = useCallback((value: number) => {
    setFilters((prev) => ({
      ...prev,
      _page: 1,
      _limit: value,
    }));
  }, []);

  const handleChangePage = useCallback((value: number) => {
    setFilters((prev) => ({
      ...prev,
      _page: value,
    }));
  }, []);

  useEffect(() => {
    fetchData();
    setSelected(() => []);
  }, [JSON.stringify(filters)]);

  return (
    <div className="px-5 ">
      <div className="flex justify-between items-center mb-5 mt-5">
        <h3 className="text-3xl font-bold tracking-tight text-start">Posts Management</h3>
      </div>
      <TableToolbar value={value} setValue={setValue} filters={filters} setFilters={setFilters} />
      <TableManager
        data={data}
        isLoading={isLoading}
        itemSelected={selected}
        limit={filters._limit}
        handleCheckAll={handleCheckAll}
        handleCheckItem={handleCheckItem}
      />
      <TablePagination
        filters={filters}
        handleChangePage={handleChangePage}
        handleChangePerPage={handleChangePerPage}
        total={total}
        isLoading={isLoading}
        itemSelected={selected}
      />
    </div>
  );
};

export default PostManagementPage;
