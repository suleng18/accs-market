import { getDetailPost } from '@/service/postService';
import { IPost } from '@/types';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { paths } from '@/constants';
import { toast } from 'sonner';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
const PostItemPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState<IPost | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async (id: string) => {
    try {
      setIsLoading(true);
      const res = await getDetailPost(id);
      setPost(() => res);
    } catch (error) {
      toast.error('Id không hợp lệ');
      navigate(paths.postsManagement, { replace: true });
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id]);

  return (
    <Dialog open={true} onOpenChange={() => navigate(-1)}>
      <DialogContent className="sm:max-w-[425px]">
        <Card>
          <CardHeader>
            <CardTitle>{post?.title}</CardTitle>
            <CardDescription>{post?.body}</CardDescription>
          </CardHeader>
          {/* <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default PostItemPage;
