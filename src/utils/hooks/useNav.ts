import { useNavigation, useRoute } from '@react-navigation/native';
import { navigate as n } from '../functions';
interface Params {
  screen: string;
  params: unknown | Params;
}
export function useNav<ParamType = any>() {
  const nav = useNavigation();
  const goBack = () => {
    nav.goBack();
  };
  const params = (useRoute()?.params as ParamType) || ({} as ParamType);
  const updateParams = (params: any) => {
    nav.setParams(params);
  };

  const navigate = (screen: string, params?: unknown | Params, push = true) => {
    n(nav, screen, params);
  };
  return {
    goBack,
    params,
    updateParams,
    nav,
    navigate,
  };
}
