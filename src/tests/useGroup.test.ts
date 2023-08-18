// import { renderHook } from '@testing-library/react-hooks';
// import mockAxios from 'jest-mock-axios';
// import { jest, describe, afterEach, it, expect } from '@jest/globals';
// import { Group } from '../typings/api/Group';
// import useGroups from '../api/useGroups';

// // Mock the useAuth0 hook to return a mock of getAccessTokenSilently function
// jest.mock('@auth0/auth0-react', () => ({
//   useAuth0: () => ({
//     getAccessTokenSilently: jest.fn(() => Promise.resolve('mockToken')),
//   }),
// }));

// describe('useGroups', () => {
//   afterEach(() => {
//     // clear all axios calls after each test
//     mockAxios.reset();
//   });

//   it('getAll should fetch all groups', async () => {
//     const { result, waitForNextUpdate } = renderHook(() => useGroups());

//     result.current.getAll();

//     const mockData: Group[] = [
//       { id: 1, name: 'TestGroup', description: 'TestDescription' },
//     ];
//     mockAxios.mockResponse({ data: mockData });

//     await waitForNextUpdate();

//     expect(mockAxios.get).toHaveBeenCalledWith(
//       expect.any(String),
//       expect.objectContaining({
//         headers: { Authorization: 'Bearer mockToken' },
//       })
//     );
//     expect(result.current.getAll).toHaveReturnedWith(mockData);
//   });

//   it('getById should fetch a group by id', async () => {
//     const { result, waitForNextUpdate } = renderHook(() => useGroups());

//     const groupId = 1;
//     result.current.getById(groupId);

//     const mockData: Group = {
//       id: 1,
//       name: 'TestGroup',
//       description: 'TestDescription',
//     };
//     mockAxios.mockResponse({ data: mockData });

//     await waitForNextUpdate();

//     expect(mockAxios.get).toHaveBeenCalledWith(
//       expect.stringContaining(String(groupId)),
//       expect.objectContaining({
//         headers: { Authorization: 'Bearer mockToken' },
//       })
//     );
//     expect(result.current.getById).toHaveReturnedWith(mockData);
//   });
// });
