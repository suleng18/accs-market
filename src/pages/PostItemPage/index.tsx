import { getDetailPost } from '@/service/postService';
import { IPost } from '@/types';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import { paths } from '@/constants';
import { toast } from 'sonner';
// import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import LoadingComponent from '@/components/LoadingComponent';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
const PostItemPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState<IPost | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = useCallback(
    async (id: string) => {
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
    },
    [navigate]
  );
  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id, fetchData]);
  const handleClose = useCallback(() => navigate(-1), [navigate]);
  return (
    <Dialog open={true} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] min-h-[150px]">
        {isLoading ? (
          <div className="flex items-center justify-center">
            <LoadingComponent />
          </div>
        ) : (
          <div>
            <DialogHeader>
              <DialogTitle>{`Post ${post?.id}`}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-6 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  User Id
                </Label>
                <Input defaultValue={post?.userId} disabled className="col-span-5" />
              </div>
              <div className="grid grid-cols-6 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Title
                </Label>
                <Input defaultValue={post?.title} className="col-span-5" />
              </div>
              <div className="grid grid-cols-6 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Body
                </Label>
                <Textarea defaultValue={post?.body} className="col-span-5" rows={6} />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleClose}>Save changes</Button>
            </DialogFooter>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PostItemPage;
