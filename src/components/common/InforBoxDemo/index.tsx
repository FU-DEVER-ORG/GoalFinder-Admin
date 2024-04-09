"use client";
import React, { useCallback, useEffect, useState } from "react";
import { InforFieldSchema } from "./inforbox.types";
import * as S from "./inforbox.styles";
import { getRequest } from "@/services/request";
type TInforBox = {
  schema: InforFieldSchema;
};

export default function InforBox({ schema }: TInforBox) {
  const { endpoint, title } = schema;
  const [data, setData] = useState<any[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const resultQuery: any = {};

  const fetchData = useCallback(async () => {
    try {
      const res: any = await getRequest(endpoint, {
        params: {
          amount: 3,
          ...resultQuery,
        },
      });
      setData(res?.results);
    } catch (error) {
    } finally {
      setIsFetching(false);
    }
  }, [endpoint, title]);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <S.InfoField>
      <p>{title}</p>
    {
        isFetching ? <p>Loading...</p> :  <div>
        {data.map((item, index) => (
          <div key={index}>
            QUESTION:{item.question}
          </div>
        ))}
      </div>
    }
    </S.InfoField>
  );
}
